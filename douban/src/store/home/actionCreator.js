
import axios from 'axios'
import {
    CHANGE_BANNERS
} from './const'
export default {
    getBanners () {//获取轮播图的数据
        return dispatch => {
            axios.get('/json/banner.json').then(res => {
                let banners = res.data
                dispatch({
                    type: CHANGE_BANNERS,
                    banners
                })
            })
        }
    }
}