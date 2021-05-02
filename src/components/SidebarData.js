import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/overview',
    icon: <AiIcons.AiFillHome style={{ color: "#848B93" }}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#848B93" }}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#848B93" }}/>,

    subNav: [
      {
        title: 'Users',
        path: '/overview/user',
        icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }} />,
        cName: 'sub-nav'
      },
      {
        title: 'Miner',
        path: '/overview/miner',
        icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }}/>,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Etherium',
    path: '/reports',
    icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#848B93" }}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#848B93" }}/>,

    subNav: [
      {
        title: 'Etherium 1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }}/>,
        cName: 'sub-nav'
      },
      {
        title: 'Etherium 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }}/>,
        cName: 'sub-nav'
      },
      {
        title: 'Etherium 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper style={{ color: "#848B93" }}/>
      }
    ]
  },
  {
    title: 'Utilities',
    path: '/products',
    icon: <FaIcons.FaCartPlus style={{ color: "#848B93" }}/>
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople style={{ color: "#848B93" }}/>
  },
  
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle style={{ color: "#848B93" }}/>
  }
];