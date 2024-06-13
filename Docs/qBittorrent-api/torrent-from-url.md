POST /api/v2/torrents/add HTTP/1.1
User-Agent: Fiddler
Host: 127.0.0.1
Cookie: SID=your_sid
Content-Type: multipart/form-data; boundary=---------------------------6688794727912
Content-Length: length

-----------------------------6688794727912
Content-Disposition: form-data; name="urls"

https://torcache.net/torrent/3B1A1469C180F447B77021074DBBCCAEF62611E7.torrent
https://torcache.net/torrent/3B1A1469C180F447B77021074DBBCCAEF62611E8.torrent
-----------------------------6688794727912
Content-Disposition: form-data; name="savepath"

C:/Users/qBit/Downloads
-----------------------------6688794727912
Content-Disposition: form-data; name="cookie"

ui=28979218048197
-----------------------------6688794727912
Content-Disposition: form-data; name="category"

movies
-----------------------------6688794727912
Content-Disposition: form-data; name="skip_checking"

true
-----------------------------6688794727912
Content-Disposition: form-data; name="paused"

true
-----------------------------6688794727912
Content-Disposition: form-data; name="root_folder"

true
-----------------------------6688794727912--


https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#api-v20


Example List 
```
[
    {
        "dlspeed":9681262,
        "eta":87,
        "f_l_piece_prio":false,
        "force_start":false,
        "hash":"8c212779b4abde7c6bc608063a0d008b7e40ce32",
        "category":"",
        "tags": "",
        "name":"debian-8.1.0-amd64-CD-1.iso",
        "num_complete":-1,
        "num_incomplete":-1,
        "num_leechs":2,
        "num_seeds":54,
        "priority":1,
        "progress":0.16108787059783936,
        "ratio":0,
        "seq_dl":false,
        "size":657457152,
        "state":"downloading",
        "super_seeding":false,
        "upspeed":0,
        "isPrivate":true
    },
    {
        another_torrent_info
    }
]
```