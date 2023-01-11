import styles from "../cssModules/MainPage.module.css"
import first_image from "../cssModules/process-4.gif"
import {BsChevronDown} from "react-icons/bs"
import pokemons from "../cssModules/pokmeons.gif"
import artket from "../cssModules/artket.gif"
import carrera from "../cssModules/imagen de carrera.png"
import { Link } from "react-router-dom"
import {SiSequelize} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"
import {DiReact} from "react-icons/di"
import {SiRedux} from "react-icons/si"
import {SiPostgresql} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {DiScrum} from "react-icons/di"
import {DiTrello} from "react-icons/di"
import {AiFillLinkedin} from "react-icons/ai"
import swal from 'sweetalert';
import { useEffect } from "react"
import useObserver from "./useObsserver"
import CV from "./CV Cabrera Lucas.pdf"
import logo from "./logoRocio.png"
import corte1 from "./corte1.jpg"
import corte2 from "./corte2.jpg"
import corte3 from "./corte3.jpg"
import bigimg from "./salmoslittle.png"
import ubicacionimg from "./ubicacion.png"

import Example from "./Example"

export default function MainPage(){

 



    return(
        <div>
         <div className={styles.container}>
            <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo} />

             
            </div>
          <div className={styles.first_section}>
          
              {<Example/>}
            {/* <div className={styles.carrusel}>
              <div>
                <ul>
                 {[corte1, corte2, corte3].map(element => {
                  return (
                   <li><img src={element}></img></li>
                            )
                           }
                          )
                         }
                </ul>
               </div>
         
            </div> 
            <div className={styles.fsbody}>
                         <body>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ut asperiores illo vel quae veritatis adipisci nemo, mollitia sunt necessitatibus nulla quod! Omnis illo harum aliquid cum! Illo, voluptatibus atque.
                         </body>
            </div>        */}
          <div className={styles.textoDescripcion}>

<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rerum unde recusandae! Porro magni, id ipsa iure in error, ducimus eius itaque temporibus corrupti maiores sint repellendus similique laboriosam libero.
</h6>

</div>
<hr />
           </div>
            
          

          <div className={styles.second_section} id="seccion-2">
          
           
                <h2 className={styles.second_section_title}>Servicios</h2>
        
                <br/>
                <br/>
                <div className={styles.second_section_contain}>
            <h6>
              Corte: $800
            </h6>
            <br />
            <h6>
              Alisados
            </h6>
            <br />
            <h6>
              Tratamientos capilares
            </h6>
            <br />
            <h6>
              Peinados
            </h6>
            <br />
            <h6>
              Depilacion sistema español
            </h6>
            <br />
            <h6>
              Lifting
            </h6>
            <br />
            <h6>
              Tinte
            </h6>
            <br />
            <h6>
              Botox de pestañas
            </h6>
            <br />
            <h6>
              Perfiles de cejas
            </h6>
            <br />
            <h6>
              Todo tipo de mechas y tecnicas
            </h6>
            <br />
            <br /><br />
            <hr />         
                         


                  </div>
                <div className={styles.ssbodymasimg}>
               
            
                         <h3>Horarios de atención</h3>
                         <br /><br />
            <h6>
              Martes a sabados de 8:00 a 19:00hs
            </h6>
            <br />      
            </div>
            
          </div>

          <div className={styles.thirt_section} id="seccion-3">
           
          </div>

          <div className={styles.fourth_section} id="seccion-4">

            <div className={styles.form_container}>
                <h5 style={{margin:"1rem"}}>Correo electrónico: Roromendoza23@gmail.com</h5>
                    <h5 style={{margin:"1rem"}}>Teléfono: 1128440273 - 1153174664</h5>
            </div>

          </div>
         </div>
        </div>
    )
} 