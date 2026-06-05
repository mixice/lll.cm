// @ts-nocheck
import 'uigg/uigg.css'
import './app.css'

import 'uigg'

import App from './App.svelte'
import data from './data.json'

const app = new App({
    target: document.getElementById('app'),
    props: data
})

export default app

$('.consult li.pay').on('click',function(){$('.list li a u i[data-pay="ture"]').parents('li').toggle()})
$('.consult li.vpn').on('click',function(){$('.list li a u i[data-vpn="ture"]').parents('li').toggle()})
$('.consult li.adult').on('click',function(){$('.list li a u i[data-adult="ture"]').parents('li').toggle()})










