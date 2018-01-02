/*
* @Author: shihuawei
* @Date:   2017-12-26 10:35:22
* @Last Modified by:   shihuawei
* @Last Modified time: 2017-12-27 11:46:18
*/
import jsonp from '../assets/js/jsonp.js'
import { commonParams, options } from './config.js'
import axios from 'axios'

export function getRecommend() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url,data,options)
}

export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, {
    g_tk: 5381,
    notice: 0,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    categoryId: 10000000,
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}