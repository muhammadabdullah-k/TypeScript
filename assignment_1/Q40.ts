
let array_of_albums:Object[]=[];

function make_album(name:string,album_title:string):Object{
    return {
        name,
        album_title                                                                                                                
    }
}

function make_album_with_noRecord(name:string,album_title:string,no_of_record:number):Object{
    return{
        name,
        album_title,
        no_of_record
    }
}

array_of_albums.push(make_album("Liam","JingleBells"));
array_of_albums.push(make_album_with_noRecord("Alex","TomorrowsTale",25));
array_of_albums.push(make_album_with_noRecord("Thomas","StorysEnd",11));
array_of_albums.push(make_album("jOHN","YOY"));
console.log(array_of_albums)

