import carraro from './../public/sponsors/carraro.png'
import deere from './../public/sponsors/deere.png'
import solis from './../public/sponsors/solis.png'
import zetor from './../public/sponsors/zetor.png'
import mahindra from './../public/sponsors/mahindra.png'
import belarus from './../public/sponsors/belarus.png'
import ino from './../public/sponsors/ino.png'
import fpm from './../public/sponsors/fpm.png'
import celmak from './../public/sponsors/celmak.png'
import tafe from './../public/sponsors/tafe.png'

import yto from './../public/sponsors/yto.jpg'
import ursus from './../public/sponsors/ursus.png'
import minos from './../public/sponsors/minos.png'
import termometal from './../public/sponsors/termometal.png'
import ferocoop from './../public/sponsors/ferocoop.png'
import majevica from './../public/sponsors/majevica.png'
import gorenc from './../public/sponsors/gorenc.png'
import gumaplast from './../public/sponsors/gumaplast.png'
import morava from './../public/sponsors/morava.png'
import kranj from './../public/sponsors/kranj.jpg'
import impex from './../public/sponsors/impex.png'
import mega from './../public/sponsors/megametal.png'
import metalfach from './../public/sponsors/metalfach.png'

export const brandLogo = (brand:string) => {
    switch (brand.toLowerCase()) {
        case 'solis':
          return solis;
        case 'tafe':
          return tafe;
        case 'mahindra':
          return mahindra;
        case 'carraro':
          return carraro;
        case 'čelmak':
          return celmak;
        case 'ursus':
          return ursus;
        case 'yto':
          return yto;
        case 'belarus':
          return belarus;
        case 'ino':
          return ino;
        case 'fpm':
          return fpm;
        case 'john-deere':
          return deere;
        case 'imt':
          return tafe;
        case 'minos-agri':
          return minos;
        case 'termometal':
          return termometal;
        case 'ferocoop':
          return ferocoop;
        case 'majevica':
          return majevica;
        case 'gorenc':
          return gorenc;
        case 'gumaplast':
          return gumaplast;
        case 'morava':
          return morava;
        case 'agromehanika-kranj':
          return kranj;
        case 'bell-impex':
          return impex;
        case 'mega':
          return mega;
        case 'metal-fach':
          return metalfach;
        default:
          return zetor;
      }
      
  }