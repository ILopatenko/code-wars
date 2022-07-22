#!/bin/bash
scriptName=$0

echo ""
echo "$scriptName is currently running ..."

echo ""
echo "Step 1 - update and upgrade"
sudo apt update && sudo apt upgrade -y

echo ""
echo "Step 2 - install main packages"
sudo apt install audacious git nano wget tar unzip htop nfs-common qbittorrent -y

echo ""
echo "Step 3 - install nodejs"
sudo curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt install -y nodejs

echo ""
echo "Step 4 - update and upgrade"
sudo apt update && sudo apt upgrade -y

echo ""
echo "Step 5 - NFS share"
echo "NFS local share for 4TER"
if [ -d "/media/4ter-nfs" ]
then
echo "Folder /media/4ter-nfs exists"
else
echo "Trying to create /media/4ter-nfs folder ..."
sudo mkdir /media/4ter-nfs
if [ -d "/media/4ter-nfs" ]
then
echo "Folder /media/4ter-nfs created successfully!"
else
echo "Can't create a folder"
fi
fi
echo "NFS local share for 2TER"
if [ -d "/media/2ter-nfs" ]
then
echo "Folder /media/2ter-nfs exists"
else
echo "Trying to create /media/2ter-nfs folder ..."
sudo mkdir /media/2ter-nfs
if [ -d "/media/2ter-nfs" ]
then
echo "Folder /media/2ter-nfs created successfully!"
else
echo "Can't create a folder"
fi
fi

if [ -d "/media/2TER" ]
then
echo "Folder /media/2TER exists"
else
echo "Trying to create /media/2TER folder ..."
sudo mkdir /media/2TER
if [ -d "/media/2TER" ]
then
echo "Folder /media/2TER created successfully!"
else
echo "Can't create a folder"
fi
fi

if [ -d "/media/860" ]
then
echo "Folder /media/860-rest exists"
else
echo "Trying to create /media/860 folder ..."
sudo mkdir /media/860
if [ -d "/media/860" ]
then
echo "Folder /media/860 created successfully!"
else
echo "Can't create a folder"
fi
fi

if [ -d "/media/win10" ]
then
echo "Folder /media/win10  exists"
else
echo "Trying to create /media/win10 folder ..."
sudo mkdir /media/win10
if [ -d "/media/win10" ]
then
echo "Folder /media/win10 created successfully!"
else
echo "Can't create a folder"
fi
fi


echo "#AUTOMOUNT NFS SHARE trueNAS" >> /etc/fstab
echo "192.168.0.200:/mnt/pool4ter/pool4ter-dataset /media/4ter-nfs  nfs defaults 0 0" >> /etc/fstab
echo "192.168.0.200:/mnt/pool2ter/pool2ter-dataset /media/2ter-nfs  nfs defaults 0 0" >> /etc/fstab
echo "#AUTOMOUNT local HDDs" >> /etc/fstab
echo "/dev/disk/by-uuid/ACDA8C27DA8BEC40 /media/win10 auto nosuid,nodev,nofail,x-gvfs-show 0 0" >> /etc/fstab
echo "/dev/disk/by-uuid/7A2590CDC3BE76D0 /media/2TER auto nosuid,nodev,nofail,x-gvfs-show 0 0" >> /etc/fstab
echo "/dev/disk/by-uuid/44FD940558E5B51B /media/860 auto nosuid,nodev,nofail,x-gvfs-show 0 0" >> /etc/fstab

echo ""
echo "Step 6 - git config --global user"
sudo git config --global user.email "yalopatenko@gmail.com"
sudo git config --global user.name "Iurii Lopatenko"









