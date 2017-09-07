import { Component } from '@angular/core';

export class Admin {

    public superadminmenu = [{
        path: 'dashboard',
        name: 'Dashboard',
        icon: 'fa-home',
      
    },
    {
        path: 'groups',
        name: 'Groups',
        icon: 'fa-list',
      
    },
    {
        path: 'uploadfiles',
        name: 'Upload Files',
        icon: 'fa-upload',
      
    },
     
    {
        path: 'audittrial',
        name: 'Audit Trail',
        icon: 'fa-file-audio-o',
   
    },
    {
        path: 'administration',
        name: 'Administration',
        icon: 'fa-user',
       
        child:[{
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
        path: 'activelog',
        name: 'Active Log',
        icon: 'fa-pencil-square-o',
      
    },
    {
        path: 'activelog',
        name: 'Role Management',
        icon: 'fa-cog',
       
    }
]


}