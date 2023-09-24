import { AiFillWindows } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import { HiDeviceMobile } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { SiSteam } from "react-icons/si";
import { SiAppstore } from "react-icons/si";
import { SiGogdotcom } from "react-icons/si";
import { SiNintendo } from "react-icons/si";
import { SiEpicgames } from "react-icons/si";


export const getPlatformsIcon = (slug)=>{
    let platforms = {
      pc : <AiFillWindows title='pc'/>,
      linux : <DiLinux title='linux'/>,
      playstation : <FaPlaystation title='playstation'/>,
      xbox : <FaXbox title='xbox'/>,
      ios : <HiDeviceMobile title='ios'/>,
      mac : <AiFillApple title='apple'/>,
      android : <AiFillAndroid title='android'/>,
      nintendo : <SiNintendoswitch title='nintendo'/>,
      web : <TbWorld title='web'/>
    }

    return platforms[slug]
  }

export const getStoreIcon = (id)=>{
  let stores = {
    "1": {
      icon: <SiSteam/>,
      name: 'Steam'
  },
    "3": {
      icon: <FaPlaystation/>,
      name: 'PlayStation Store'
    },
    "2": {
      icon: <FaXbox/>,
      name: 'Xbox Store'
    },
    "4": {
      icon: <SiAppstore/>,
      name: 'App Store'
    },
    "5": {
      icon: <SiGogdotcom/>,
      name: 'GOG'
    },
    "6": {
      icon: <SiNintendo/>,
      name: 'Nintendo Store'
    },
    "7": {
      icon: <FaXbox/>,
      name: 'Xbox 360 Store'
    },
    "8": {
      icon: <FaGooglePlay/>,
      name: 'Google Play'
    },
    "9": {
      icon: <FaItchIo/>,
      name: 'itch.io'
    },
    "11": {
      icon: <SiEpicgames/>,
      name: 'Epic Games'
    }
  }
  return stores[id];
}
  
  

  export const myStyle = (metaScore)=>{
    if(metaScore <= 100 && metaScore >= 90){
        let style = {
          "borderColor":"green",
          "color":"green"
        }
      return style;
    }
    else if(metaScore >= 80 && metaScore < 90){
      let style = {
        "borderColor":"blue",
        "color":"blue"
      }
      return style;
    }
    else if(metaScore >= 70 && metaScore < 80){
      let style = {
        "borderColor":"yellow",
        "color":"yellow"
      }
      return style;
    }
    else{
      let style = {
        "borderColor":"red",
        "color":"red"
      }
      return style;
    }
  }

  export const getDate = (date)=>{
    let d = new Date(date);
    let opts = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }
    return d.toLocaleString('default' , opts);
  };