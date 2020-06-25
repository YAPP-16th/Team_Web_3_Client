import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import reducer from "./FindReducer";

interface Song {
  id: string;
  title: string;
  isPlaying: boolean;
  isLike: boolean;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: string;
  name: string;
  introduction: string;
  tags: string[];
  likes: number;
  profile_url: string;
  features: string[];
  song: Song;
}

interface MusicianMainResponseDto {
  musicianId: number;
  nickNm: string;
  introduction: string;
  profileUrl: string;
}
interface SongMainResponseDto {
  songId: number;
  title: string;
  coverUrl: string;
  songUrl: string;
}
interface SimpleMusicianResponseDto {
  musicianMainResponseDto: MusicianMainResponseDto;
  songMainResponseDto: SongMainResponseDto;
  spclNoteTags: string[];
  rptags: string[];
}
interface MusicianResponse {
  simpleMusicianResponseDto: SimpleMusicianResponseDto;
  bookmarkCount: number;
  alreadyBookmark: boolean;
}
interface MusicianListResponse {
  //newMusician: MusicianResponse[];
  //bestMusician: MusicianResponse[];
  musician: MusicianResponse[];
}
const defaultMusicianList: Musician[] = [
  {
    id: "0",
    name: "",
    introduction: "",
    profile_url: null,
    tags: [],
    likes: 0,
    features: [],
    song: {
      id: "0",
      title: "",
      cover_url: "/static/default-cover.png",
      song_url: null,
      isPlaying: false,
      isLike: false,
    },
  },
];

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
  end: number;
}

type ActionType = {
  type:
    | "INIT_MUSICIANS"
    | "NEXT_MUSICIANS"
    | "TOGGLE_LIKE"
    | "SELECT_SONG"
    | "PLAY_SONG"
    | "STOP_SONG";
  payload?: any;
};

interface MusicianInterface {
  musicianList: MusicianList;
  dispatch?: React.Dispatch<ActionType>;
}

interface Filter {
  atmoList: Array<string>;
  genreList: Array<string>;
  instruList: Array<string>;
  themeList: Array<string>;
}

const defaultFilter: Filter = {
  atmoList: [""],
  genreList: [""],
  instruList: [""],
  themeList: [""],
};

interface FilterInterface {
  filter: Filter;
  setFilter?: Function;
  musicianList: MusicianList;
}

export const FilterContext = React.createContext<FilterInterface>({
  filter: defaultFilter,
  //musicianList: [],
  musicianList: { list: defaultMusicianList, display: [], page: 0, end: 0 },
});

const parseResponse = (responseData: MusicianListResponse): MusicianList => {
  let list: Musician[] = [];
  const mapper = ({
    simpleMusicianResponseDto,
    bookmarkCount,
    alreadyBookmark,
  }) => {
    const {
      musicianMainResponseDto,
      songMainResponseDto,
      spclNoteTags,
      rptags,
    } = simpleMusicianResponseDto;
    return {
      id: musicianMainResponseDto.musicianId,
      name: musicianMainResponseDto.nickNm,
      introduction: musicianMainResponseDto.introduction,
      tags: rptags,
      likes: bookmarkCount,
      profile_url: musicianMainResponseDto.profileUrl,
      features: spclNoteTags,
      song: {
        id: songMainResponseDto.songId,
        title: songMainResponseDto.title,
        isPlaying: false,
        isLike: alreadyBookmark,
        cover_url: songMainResponseDto.coverUrl,
        song_url: songMainResponseDto.songUrl,
      },
    };
  };
  list = responseData.musician.map(mapper);
  return { list, display: [], page: 0, end: 0 };
};

const useLoad = (callback: Function, filter: Filter) => {
  const [loading, setLoading] = useState(false);
  const loadInitData = async (callback: Function, filter: Filter) => {
    setLoading(true);
    console.log(filter);
    const response: AxiosResponse = await axios.post(
      "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musicians/curation",
      JSON.stringify({ ...filter }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.data) {
      console.log(response.data);
      const responseData: MusicianListResponse = response.data;
      const initData: MusicianList = parseResponse(responseData);
      callback(initData);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitData(callback, filter);
  }, [filter]);
  return loading;
};

const FilterStore = ({ children }: { children: React.ReactElement }) => {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  //const [musicianList, setMusicianList] = useState<MusicianList>();
  const [musicianList, dispatch] = useReducer(reducer, {
    list: defaultMusicianList,
    display: [],
    page: 0,
    end: 36,
  });

  useEffect(() => {
    dispatch({ type: "INIT_MUSICIANS", payload: defaultMusicianList });
  }, []);

  useLoad((responseData: MusicianList) => {
    setMusicianList(responseData);
  }, filter);
  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        musicianList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterStore;
