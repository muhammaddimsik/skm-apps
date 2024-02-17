import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { IoMdSend } from "react-icons/io";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

interface Props {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameForm: React.FC<Props> = ({ setName }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setName(values.username);
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-10/12">
              <FormControl>
                <Input placeholder="Masukan nama anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <IoMdSend />
        </Button>
      </form>
    </Form>
  );
};

export default NameForm;
