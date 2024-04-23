import {proxy} from "valtio"


const state = proxy ({
    intro:false,
    color:'#5c2a9d',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:"./threejs.png"
})

export default state