'use client'

import Image from "next/image"
import LogoHor from "@/public/assets/logo-hor.webp"
import { useState } from "react"
import CheckBox from "@/public/components/CheckBox"

const Home = () => {

  /* Discount */

  const [disct, setDisct] = useState(false)

  /* Terms */

  const [terms, setTerms] = useState(false)

  const handleTerms = () => {
    setTerms(current => !current) 
  }

  return (
    <main className="app">
      <div className="page-wrap">
        <div className="logo-holder">
          <Image src={LogoHor} width={600} height={'auto'} alt="logo"/>
        </div>
        <div className="products-holder">
          <h5>Resumen de la compra</h5>
          <div className="summary">
            <div className="product-list">
              <div className="product">
                <div className="name">
                  Cuoton 2.32
                </div>
                <div className="price">
                  19.99USD
                </div>
              </div>
            </div>
            <div className="total">
              <div className="tag">
                Total
              </div>
              <div className="quant">
                19.99USD
              </div>
            </div>
          </div>
        </div>
        {
          disct && (
            <div className="disct-input">
              <label>Código no existe</label>
              <input type="text" />
            </div>
          )
        }
        <div className="discount-btn">
          <span onClick={()=>setDisct(true)}>
            Tengo un código de descuento
          </span>
        </div>
        <div className="user-data">
          <h5>Tus Datos</h5>
          <div className="data-form">
            <div className="input-field">
              <span>Nombre</span>
              <input type="text" required/>
            </div>
            <div className="input-field">
              <span>Email</span>
              <input type="email" required/>
            </div>
          </div>
          <div className="terms">
            <CheckBox status={terms} handler={handleTerms}/>
          </div>
          <div className="pay-btn">
            Comprar
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home