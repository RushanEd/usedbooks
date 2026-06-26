"use server"

import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"

export async function emailSignup(formData: FormData) {
  const { error } = await authClient.signUp.email(
    {
      name: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    },
    {
      onSuccess: () => {
        redirect("/")
      },
      onError: (ctx) => {
        console.log(ctx.error)
      },
    }
  )

  console.log(error)
}

export async function facebookSignup() {
  const { error } = await authClient.signIn.social({
    provider: "facebook",
  }, {
    onError: (ctx) => {
      console.log(ctx.error)
    }
  })
  console.log({error})
}
