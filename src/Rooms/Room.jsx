import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const Room =()=>{
    const {roomId} = useParams();
    const myMeeting =async(element)=>{
        const AppId = 999104304;
        const ServerSerect = "fcc7a9269cebd20d221e3f543788cc93";
        const KitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(AppId,ServerSerect,roomId,Date.now().toString(),"your name??");
    const zc = ZegoUIKitPrebuilt.create(KitToken);
    zc.joinRoom({
        container:element,
        maxUsers:4,
        scenario:{
            mode:ZegoUIKitPrebuilt.VideoResolution_480P
        },
        showMyCameraToggleButton:true,
        showMyCameraToggleButton:true,
        lowerLeftNotification:{
            showUserJoinAndLeave:true
        },
        showScreenSharingButton:true,
        backgroundUrl:"black"
    })
   }
   return (
    <>
    <div className="meeting">
        <div className="meet" ref={myMeeting}/>
    </div>
    </>
   )
}
export default Room;