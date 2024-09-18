import { mailOptions, transporter } from "@utils/nodemailer";
import { NextResponse } from "next/server";

const CONTACT_MESSAGE_FIELDS={
    fullname:"NAME",
    email:"EMAIL",
    subject:"SUBJECT",
    message:"MESSAGE"
}

const generateEmailContent=(data)=>{
    const stringData=Object.entries(data).reduce(
        (str,[key,val])=>{
            return str+=`${CONTACT_MESSAGE_FIELDS[key]} : ${val}\n`
        },""
    )
    const htmlData=Object.entries(data).reduce(
        (str,[key,val])=>{
            return str+=`<h4 className="text-lg font-bold">${CONTACT_MESSAGE_FIELDS[key]}</h4><p className="text-sm">${val}</p>\n`
        },""
    )
    return{
        text:stringData,
        html:htmlData
    }
}


export const POST=async(req)=>{
    const data=await req.json();
    const {fullname,email,message}=data;
    if (!fullname || !email || !message) return new NextResponse(JSON.stringify({message:"Not Mentioned All Required Fields"}),{status:400});

    try {
        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(data),
            subject:"Contacting to Free Pani",
        })
        return new NextResponse(JSON.stringify({success:true,message:"Mail Sent!"}),{status:200})       
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"Bad Request",error:error.message}),{status:400})
    }
}