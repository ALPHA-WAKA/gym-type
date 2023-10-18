import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Htext from "@/shared/Htext"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const ContactUs = ({setSelectedPage}: Props)=> {
    const {register,trigger,formState :{errors}}=useForm();
    const onSubmit=async(e : any)=>{
     const isValid=await trigger()
     if(!isValid){
        e.preventDefault();
     }
    }
    const inputStyles=` mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
<motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
{/* Header */}
<motion.div 
className="md:w-3/5" 
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.5 }}
variants={{
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}}>
<Htext>
    <span className="text-primary-500">Join Now</span>To Get In Shape
</Htext>
<p className="my-5">
Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
 sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
 adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
</p>
</motion.div>
{/* FORM AND IMAGE */}
<div className="mt-10 justify-between gap-8 md:flex">
    <motion.div className="mt-10 basis-3/5 md:mt-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}>
     <form
     target="_blank"
     onSubmit={onSubmit} 
     method="POST"
      
     action="https://formsubmit.co/el/nidisi">

<input type="text"
          className={inputStyles} 
          placeholder="NAME" 
          {...register("name",{
                 required:true,
                 maxLength:100
                })
          } />
{errors.name && (
    <p className="mt-1 text-primary-500">
          {errors.name.type==="required" && "This field is required."}
          {errors.name.type==="maxLenght" && "Max length is 100 char."}
    </p>
)}
<input type="text"
          className={inputStyles} 
          placeholder="EMAIL" 
          {...register("email",{
                 required:true,
                pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                }) 
          } />
{errors.email && (
    <p className="mt-1 text-primary-500">
          {errors.email.type==="required" && "This field is required."}
          {errors.email.type==="pattern" && "Invalid Email Address."}
    </p>
)}
<textarea 
rows={4}
cols={50}
          className={inputStyles} 
          placeholder="MESSAGE" 
          {...register("message",{
                 required:true,
                 maxLength:2000
                })
          } />
{errors.message && (
    <p className="mt-1 text-primary-500">
          {errors.message.type==="required" && "This field is required."}
          {errors.message.type==="maxLenght" && "Max length is 100 char."}
    </p>
)}
<button
type="submit"
className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white">
Submit
</button>
     </form> 
    </motion.div>
    <motion.div className="relative mt-16 basis-2/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
     >
   <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]" >
<img src={ContactUsPageGraphic} alt="contact-us" className="w-full" />
   </div>
    </motion.div>
</div>
</motion.div>
    </section>
  )
}

export default ContactUs