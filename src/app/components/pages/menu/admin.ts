import { Component } from '@angular/core';

export class Admin {

    public superadminmenu = [{
        id: 1,
        path: 'dashboard',
        name: 'Dashboard',
        icon: 'fa-home',
        expanded: false

    },
    {
        id: 2,
        path: 'groups',
        name: 'Groups',
        icon: 'fa-list',
        expanded: false
    },
    // {
    //     id: 3,
    //     path: 'uploadfiles',
    //     name: 'Upload Files',
    //     icon: 'fa-upload',
    //     expanded: false
    // },

    // {
    //     id: 4,
    //     path: 'audittrial',
    //     name: 'Audit Trail',
    //     icon: 'fa-file-audio-o',
    //     expanded: false
    // },
    {
        id: 5,
        path: 'administration',
        name: 'Administration',
        icon: 'fa-user',
        expanded: false,
        child: [{
            path: 'administration/contactlist',
            name: 'Contact Lists',
            //icon: 'fa-user',      
        },
        {
            path: 'administration/guestlist',
            name: 'Guests',
            //icon: 'fa-user',      
        },
        ]
    },
    {
        id: 6,
        path: 'myspace',
        name: 'My Space',
        icon: 'fa-pencil-square-o',
        expanded: false,
        child: [{
            path: 'myspace/myfiles',
            name: 'My Files',
            //icon: 'fa-user',      
        },
        {
            path: 'myspace/recievedfile',
            name: 'Recieved Files',
            //icon: 'fa-user',      
        },
        ]

    },
    // {
    //     id: 7,
    //     path: 'activelog',
    //     name: 'Role Management',
    //     icon: 'fa-cog',
    //     expanded: false

    // }
    ]


}