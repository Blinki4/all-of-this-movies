export interface IMovie {
    id: number;
    name: string;
    releaseYears: IReleaseYears[];
    poster: IPoster;
    backdrop: IBackdrop;
    type: string;
}

interface IReleaseYears {
    start: string;
    end: string;
}

interface IBackdrop {
    url: string;
    previewUrl: string;
}

interface IPoster {
    url: string;
    previewUrl: string;
}