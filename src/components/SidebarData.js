import React from 'react';
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as TiIcons from "react-icons/ti";
import * as AiIcons from "react-icons/ai";
import * as M from "./imports";
import { Not } from './Styles'
const open = "#f55661";
const close = "#ffffff";

export class Company {
  constructor(title, image, notificationNumber, isopen) {
    this.title = title;
    this.image = image;
    this.notificationNumber = notificationNumber;
    this.isopen = isopen;
  }
}

export const Companies = [
  new Company(
    "Company1",
    M.apple,
    0,
    false
  ),
  new Company(
    "Company2",
    M.cocacola,
    99,
    false
  ),
  new Company(
    "Company3",
    M.king,
    0,
    false
  ),
  new Company(
    "Company4",
    M.fiat,
    0,
    false
  ),
  new Company(
    "Company5",
    M.pepsi,
    0,
    false
  ),
  new Company(
    "Company6",
    M.starbucks,
    0,
    false
  ),
]

export const SidebarData = [
  {
    title: 'NOTIFICATIONS',
    icon: [<MdIcons.MdNotificationsActive color={close} />, <MdIcons.MdNotificationsActive color={open} />],
    iconClosed: <Not>29</Not>,
    iconOpened: <Not>29</Not>,
    open: false,
    subNav: [
      {
        title: 'Current',
        path: '/notifications/current',
        icon: <BsIcons.BsDot />,
        isopen: false
      },
      {
        title: 'Passed',
        path: '/notifications/passed',
        icon: <BsIcons.BsDot />
      }
    ]

  },
  {
    title: 'SUMMARY',
    color: '#ffffff',
    icon: [<HiIcons.HiOutlinePresentationChartLine color={close} />, <HiIcons.HiOutlinePresentationChartLine color={open} />],
    iconClosed: <AiIcons.AiOutlinePlus color='#000000' />,
    iconOpened: <AiIcons.AiOutlineMinus color='#000000' />,
    open: false,
    subNav: [
      {
        title: 'Summary 1',
        path: '/summary/summary1',
        icon: <BsIcons.BsDot />
      },
      {
        title: 'Summary 2',
        path: '/summary/summary2',
        icon: <BsIcons.BsDot />,
      },
      {
        title: 'Summary 3',
        path: '/summary/summary3',
        icon: <BsIcons.BsDot />
      }
    ]
  },
  {
    title: 'PUBLISH',
    icon: [<HiIcons.HiOutlinePencilAlt color={close} />, <HiIcons.HiOutlinePencilAlt color={open} />],
    iconClosed: <AiIcons.AiOutlinePlus color='#000000' />,
    iconOpened: <AiIcons.AiOutlineMinus color='#000000' />,
    open: false,
    subNav: [
      {
        title: 'Compose',
        path: '/publish/compose',
        icon: <BsIcons.BsDot />
      },
      {
        title: 'Feed',
        path: '/publish/feed',
        icon: <BsIcons.BsDot />
      }
    ]

  },
  {
    title: 'ENGAGE',
    icon: [<Io5Icons.IoChatbubblesOutline color={close} />, <Io5Icons.IoChatbubblesOutline color={open} />],
    iconClosed: <AiIcons.AiOutlinePlus color='#000000' />,
    iconOpened: <AiIcons.AiOutlineMinus color='#000000' />,
    open: false,
    subNav: [
      {
        title: 'Engage 1',
        path: '/engage/engage1',
        icon: <BsIcons.BsDot />,
        isopen: false
      },
      {
        title: 'Engage 2',
        path: '/engage/engage2',
        icon: <BsIcons.BsDot />
      }
    ]
  },
  {
    title: 'LISTEN',
    icon: [<GiIcons.GiMusicalNotes color={close} />, <GiIcons.GiMusicalNotes color={open} />],

    iconClosed: <AiIcons.AiOutlinePlus color='#000000' />,
    iconOpened: <AiIcons.AiOutlineMinus color='#000000' />,
    open: false,
    subNav: [
      {
        title: 'listen 1',
        path: '/listen/listen1',
        icon: <BsIcons.BsDot />
      },
      {
        title: 'listen 2',
        path: '/listen/listen2',
        icon: <BsIcons.BsDot />
      }
    ]
  },
  {
    title: 'REPORT',
    icon: [<TiIcons.TiChartBarOutline color={close} />, <TiIcons.TiChartBarOutline color={open} />],
    iconClosed: <AiIcons.AiOutlinePlus color='#000000' />,
    iconOpened: <AiIcons.AiOutlineMinus color='#000000' />,
    open: false,
    subNav: [
      {
        title: 'Report 1',
        path: '/report/report1',
        icon: <BsIcons.BsDot />,
      },
      {
        title: 'Report 2',
        path: '/report/report2',
        icon: <BsIcons.BsDot />
      }
    ]
  }
];


