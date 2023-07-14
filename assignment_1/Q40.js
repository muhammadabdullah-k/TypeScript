var array_of_albums = [];
function make_album(name, album_title) {
    return {
        name: name,
        album_title: album_title
    };
}
function make_album_with_noRecord(name, album_title, no_of_record) {
    return {
        name: name,
        album_title: album_title,
        no_of_record: no_of_record
    };
}
array_of_albums.push(make_album("Liam", "JingleBells"));
array_of_albums.push(make_album_with_noRecord("Alex", "TomorrowsTale", 25));
array_of_albums.push(make_album_with_noRecord("Thomas", "StorysEnd", 11));
array_of_albums.push(make_album("jOHN", "YOY"));
console.log(array_of_albums);
