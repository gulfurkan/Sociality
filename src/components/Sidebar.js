import React, { useState } from 'react';
import { SidebarData, Companies } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import { SidebarNav, SidebarWrap, CompanyNav, Container, BorderX, Not, SidebarLabel, DropdownLink, SidebarLink } from './Styles'






const Sidebar = () => {

  const [open, setopen] = useState(3);
  const [subnav, setSubnav] = useState(-1);
  const [current, setCurrent] = useState(-1);
  return (
    <>
      <IconContext.Provider value={{}}>

        <SidebarNav className='comp'>
          <SidebarWrap>
            {
              Companies.map((item, index) => {
                return (
                  <CompanyNav onClick={() => setopen(index)}>
                    {index === open
                      ? <><BorderX></BorderX><Container light={true}><img src={item.image} alt="" width='35px' height='35px' /> {item.notificationNumber === 0 ? null : <Not className='rt'>{item.notificationNumber}</Not>}</Container></>
                      : <Container light={false}><img src={item.image} alt="" width='35px' height='35px' /> {item.notificationNumber === 0 ? null : <Not className='rt'>{item.notificationNumber}</Not>} </Container>
                    }

                  </CompanyNav>
                );
              })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <IconContext.Provider value={{}}>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <SidebarLink aria-disabled={subnav === index ? true : false} onClick={() => setSubnav(index)} subnav={subnav === index}>
                    <div>
                      {subnav === index
                        ? item.icon[0]
                        : item.icon[1]
                      }
                      <SidebarLabel>{item.title}</SidebarLabel>
                    </div>
                    <div>
                      {subnav === index
                        ? item.iconOpened
                        : item.iconClosed
                      }
                    </div>
                  </SidebarLink>
                  {item.subNav && subnav === index &&
                    item.subNav.map((item, index) => {
                      return (
                        <DropdownLink focus={current === item.title ? true : false} onClick={() => setCurrent(item.title)} to={item.path} key={index}>
                          {item.icon}
                          <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                      );
                    })}
                </>
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>


    </>
  );
};

export default Sidebar;
