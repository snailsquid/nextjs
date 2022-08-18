import React from "react";
import { supabase } from "../../utils/supabaseClient";
import SearchPage from "../../components/SearchPage";

export async function getServerSideProps() {
  const { data, error } = await supabase.from("maps").select();
  return {
    props: {
      data: data,
      err: error,
    },
  };
}

interface map {
  data: object[];
  err: any;
}

export default function Maps({ data, err }: map) {
  if (err) {
    console.log(`err : `);
    console.log(err.message);
  }
  return <SearchPage data={data} />;
}
