'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Dahsboard() {
  const session = useSession()
  const route = useRouter()
useEffect(()=>{
  if (session.status === "Loading") {
    return <p>Loading ..... </p>
  }
  if (session.status === "unauthenticated") {
   route?.push('/dashboard/login')
  }
},[session])
  return(
    <>
    <h2>Dashboard</h2>
    </>
  )
}
