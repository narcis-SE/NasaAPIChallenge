export interface RoverPhotos{
    photos: Photos[]
}
export interface Photos{
    camera:{
        full_name:string;
    }
    img_src: string;
    earth_date: string;
    rover:{
        name: string;

    }
}