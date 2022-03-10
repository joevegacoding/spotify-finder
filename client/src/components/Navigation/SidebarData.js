import React from 'react'

import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [

//  {
//     title: 'Home',
//     path: '/home',
//     icon: <AiIcons.AiFillHome/>,

// },
{
    title: 'Songs',
    path: '/top-tracks',
    icon: <MdIcons.MdLibraryMusic/>
},
{
    title: 'Artists',
    path: '/top-artists',
    icon: <GiIcons.GiMicrophone/>,

},
{
    title: 'Playlists',
    path: '/playlists',
    icon: <MdIcons.MdAlbum/>,

},

{
    title: 'Profile',
    path: '/profile',
    icon: <BsIcons.BsFillPersonFill/>,

}


];

