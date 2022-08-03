import React from "react";
import Background from "../../components/Background";
import Navbar from '../../components/Navbar'
import { useRouter } from "next/router";
import { supabase } from '../../utils/supabaseClient'

export async function getServerSideProps(context) {
  const { data, error } = await supabase
  .from('maps')
  .select()
  return {
    props: {
      data: data,
      err: error
    }
  }
} 

export default function Maps({ data, err }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(data)
  if(err) console.log(`err : `)
  console.log(err.message)
  const maps = data.map(map=>
    (<div key='map.id' className="bg-white w-full">
      <h1>{map.title}</h1>
      <p>{map.builder}</p>
    </div>)
  )
  return <Background color="blue">
    <Navbar/>
    <div className="inline-grid grid-cols-2 grid-flow-row-dense gap-5 px-10 py-5 w-full">
      {maps}
    </div>
  </Background>;
}
