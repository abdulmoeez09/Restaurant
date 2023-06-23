import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../redux/cartSlice'

const Product = ({pizza}) => {
  const [price,setPrice] = useState(pizza.price[0])
    const [size,setSize] = useState(0)
    const [extras,setExtras] = useState([])
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch();
    const changePrice = (number) =>{
      setPrice(price+number)
    }

    const handleSize =(sizeIndex) =>{
      const difference = pizza.price[sizeIndex] - pizza.price[size]
      setSize(sizeIndex)
      changePrice(difference)
    }
    const handleChange=(e,option)=>{
      const checked = e.target.checked
      if(checked){
        changePrice(option.price)
        setExtras((prev)=> [...prev , option])
      }else{
        changePrice(-option.price)
        setExtras(extras.filter((extra)=> extra._id !== option._id ))

      }
    }
    const handleClick = ()=>{
      dispatch(addProduct({...pizza,extras,price,quantity}))
    }
    
  return (
    <div className={styles.container}>
         <div className={styles.left}>
         <div className={styles.imgcontainer}>
           <Image src={pizza.img} alt='' layout='fill' objectFit='contain'/>
         </div>
         </div>
         <div className={styles.right}>
         <h1 className={styles.title}>{pizza.title}</h1>
         <span className={styles.price}>${price} </span>
         <p className={styles.desc}>{pizza.desc}</p>
         <h3 className={styles.choose}>Choose the Size</h3>
         <div className={styles.sizes}>
         <div className={styles.size}>
            <Image src='/img/size.png' alt='' layout='fill' onClick={()=>handleSize(0)}/>
         <span className={styles.number}>Small</span>
         </div>
         <div className={styles.size}>
            <Image src='/img/size.png' alt='' layout='fill' onClick={()=>handleSize(1)}/>
         <span className={styles.number}>Medium</span>
         </div>
         <div className={styles.size}>
            <Image src='/img/size.png' alt='' layout='fill' onClick={()=>handleSize(2)}/>
         <span className={styles.number}>Large</span>
         </div>
         </div>
         <h3 className={styles.choose}>Choose additional Ingredients</h3>
         <div className={styles.Ingredients}>
          {pizza.extraOptions.map((option)=>(
            <div className={styles.option} key={option._id}>
                <input type='checkbox' id={option.text} name={option.text} className={styles.checkbox} onChange={(e)=>handleChange(e,option)} />
                <label htmlFor='double'>{option.text}</label>
            </div>
            
          ))}
            
           
         </div>
         <div className={styles.add}>
            <input type='number' defaultValue={1} className={styles.quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <button type='button' className={styles.button} onClick={handleClick}>Add to Cart</button>
         </div>
         </div>

    </div>
  )
}
export default Product;

export const getServerSideProps = async ({params})=>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return{
   props:{
     pizza : res.data
   }
  
  }
}