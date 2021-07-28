import React from 'react'
import data from '../../data/data.json';
import './feed.css'
import noPost from '../../data/no-post-image.png'
import { FaFacebookF, FaRetweet } from "react-icons/fa";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { IoEyeOutline, IoShareSocialOutline, IoBanOutline } from 'react-icons/io5';
import { VscComment, VscTrash } from "react-icons/vsc";
import { BiLike } from "react-icons/bi";
import { FiHeart } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go'
import { CgMoreO } from 'react-icons/cg'
import { HiCheck } from 'react-icons/hi'
import profile from '../../asset/profile.png'
export default function PublishF() {
    {
        const datas = [];
        Object.values(data.posts_by_date).forEach(value => {
            datas.push(value);
        });

        return (
            <>
                <div className='top'>
                    <div className='top item'>
                        <GoPrimitiveDot className='top item dot' color='#ACACAC' />
                        <p className='top item'>Published</p>
                    </div>
                    <div className='top item'>
                        <GoPrimitiveDot className='top item dot'  color='#3AC183' />
                        <p className='top item'>Scheduled</p>
                    </div>
                    <div className='top item'>
                        <GoPrimitiveDot className='top item dot' color='#F7BF38' />
                        <p className='top item'>Need Approval</p>
                    </div>
                    <div className='top item'>
                        <GoPrimitiveDot className='top item dot' color='#FB6450' />
                        <p className='top item'>Error</p>
                    </div>
                    <div className='top item'>
                        <GoPrimitiveDot className='top item dot' color='#67B1F2' />
                        <p className='top item'>Notes</p>
                    </div>
                    <img src={profile} alt="" className='top image'/>

                </div>
                <div className='body'>

                    {
                        datas.reverse().map((item) => {
                            return (
                                <>
                                    <p className='tit'>{getDate(item[0].published_at)[0]}</p>
                                    <div className='row'>
                                        {
                                            item.map((item) => {
                                                return (
                                                    <div className="wrapper">
                                                        <Card
                                                            date={getDate(item.published_at)}
                                                            img={item.entry.image}
                                                            title={item.account.name}
                                                            description={item.entry.message}
                                                            status={item.status}
                                                            channel={item.account.channel}
                                                            buttons={getButtons(parseInt(item.status))}
                                                        />
                                                    </div>
                                                );
                                            })

                                        }

                                    </div>
                                </>
                            );
                        })

                    }
                </div>
            </>
        );
    }

    function Card(props) {
        const [image, setImage] = React.useState(props.img);
        const cName = ["", "Scheduled", "Notes", "Published", "Error"];

        return (
            <div className="card" >
                <div className='card row'>
                    <div className={"card left " + cName[props.status].toLowerCase()}>
                        {
                            props.channel === "instagrambusiness"
                                ? <FaFacebookF size='24' color="#fff" />
                                : props.channel === "twitter"
                                    ? <IoLogoInstagram size='24' color='#fff' />
                                    : props.channel === "facebook"
                                        ? <IoLogoTwitter size='22' color='#fff' />
                                        : null
                        }
                    </div>
                    <div className='card right'>
                        <div className='card row'>
                            <p className='card date'>{props.date}</p>
                            <div className='card buttons'>
                                {
                                    props.buttons.map((item) => {
                                        return (
                                            <>
                                                <div className='card buttons button'>
                                                 {item}
                                                </div>
                                            </>
                                        );
                                    })

                                }
                            </div>
                        </div>
                        {
                            props.description.includes('?')
                            ?<p className='card description'> {getLink(props.description)[0]} <a href={getLink(props.description)[1]}>{getLink(props.description)[1]}</a> </p>
                            :<p className='card description'> {props.description}</p>
                        }
                        <img src={image} alt="" className='card image' onError={() => setImage(noPost)} />
                        {
                            props.channel === "twitter"
                                ? <div className='card istatistics'>
                                    <div className='card container'>
                                        <FiHeart size='24' color="#ACACAC" />
                                        <p>15</p>
                                    </div>
                                    <div className='card container'>
                                        <FaRetweet size='24' color="#ACACAC" />
                                        <p>15</p>
                                    </div>
                                    <div className='card container'>
                                        <VscComment size='24' color="#ACACAC" />
                                        <p>15</p>
                                    </div>
                                    <div className='card container'>
                                        <IoEyeOutline size='24' color="#ACACAC" />
                                        <p>15</p>
                                    </div>
                                </div>
                                : <div className='card istatistics'>
                                    <div className='card container'>
                                        <BiLike size='24' color="#ACACAC" />
                                        <p>15</p>
                                    </div>
                                    <div className='card container'>
                                        <VscComment size='24' color="#ACACAC" />
                                        <p>15</p>
                                    </div>
                                    <div className='card container'>
                                        <IoShareSocialOutline size='24' color="#ACACAC" />
                                    </div>
                                    <div className='card container'>
                                        <IoEyeOutline size='24' color="#ACACAC" />
                                        <p className='card container text'>15</p>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>
        );
    }

}



function getDate(exp) {
    var dt = [];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateandtime = exp.split(" ");
    var date = dateandtime[0].split("-");
    dt[0] = date[2] + " " + months[parseInt(date[1])] + " " + date[0];
    dt[1] = " - " + dateandtime[1];
    return dt;
}

function getButtons(status) {
    var buttons = [];
    var c = "#D5D5D5";
    var size = 24;
    switch (status) {
        case 0:
            buttons.push(<HiCheck size={size} color={c} />);
            break;
        case 1:
            buttons.push(<IoBanOutline size={size} color={c} />);
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:

    }
    buttons.push(<VscTrash size={size} color={c} />);
    buttons.push(<CgMoreO size={size} color={c} />);
    return buttons;
}

function getLink(exp){
    var x=exp.split("http:");
    x[1]= "http:"+x[1];
    return x;
}
