"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { questionSchema } from "@/lib/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { createQuestion } from "@/lib/action/question.action";
import { usePathname, useRouter } from "next/navigation";

const type: any = "create";

const Question = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const path = usePathname();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  const handlerKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 20) {
          form.setError("tags", {
            type: "required",
            message: "Tag must be less than 20 characters",
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
          console.log(form.getValues("tags"));
        }
      } else {
        form.trigger();
      }
    }
  };

  const handlerDeleteTag = (tag: string) => {
    const newTags = form.getValues("tags").filter((t) => t !== tag);

    form.setValue("tags", newTags);
  };

  async function onSubmit(values: z.infer<typeof questionSchema>) {
    setIsSubmitting(true);
    try {
      await createQuestion({
        title: values.title,
        content: values.explanation,
        tags: values.tags,
        author: JSON.parse(userId),
        path,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="mt-10 flex w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="text-dark400_light700 paragraph-semibold ">
                  Question Title <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="background-light900_dark300 no-focus paragraph-regular text-dark400_light700 light-border-2 min-h-[56px] px-5 py-2.5"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="paragraph-regular text-light-500">
                  Be specific and imagine you&apos;re asking a question to
                  another person
                </FormDescription>
                <FormMessage className="paragraph-regular text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="explanation"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="text-dark400_light700 paragraph-semibold ">
                  Explanation <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => {
                      field.onChange(content);
                    }}
                    initialValue=""
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                      ],
                      toolbar:
                        "undo redo | " +
                        "codesample bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                    }}
                  />
                </FormControl>
                <FormDescription className="paragraph-regular text-light-500">
                  Describe all the information someone would need to answer
                </FormDescription>
                <FormMessage className="paragraph-regular text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="text-dark400_light700 paragraph-semibold ">
                  Tags <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="Add up to 3 tags"
                      className="background-light900_dark300 no-focus paragraph-regular text-dark400_light700 light-border-2 min-h-[56px] px-5 py-2.5"
                      onKeyDown={(e) => handlerKeyDown(e, field)}
                    />
                    {field.value.length > 0 && (
                      <div className="mt-3 flex items-center gap-3">
                        {field.value.map((tag: string) => (
                          <div
                            className="subtle-medium background-light800_dark300 text-dark400_light500 flex-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                            key={tag}
                            onClick={() => handlerDeleteTag(tag)}
                          >
                            {tag}
                            <Image
                              src="/assets/icons/close.svg"
                              alt="close"
                              width={12}
                              height={12}
                              className="cursor-pointer object-contain invert-0 dark:invert"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="paragraph-regular text-light-500">
                  Add up to 3 tags to describe what your question is about
                </FormDescription>
                <FormMessage className="paragraph-regular text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="body-semibold w-fit self-end bg-primary-500 px-6 py-3 !text-light-900"
          >
            {isSubmitting ? (
              <>{type === "create" ? "Creating..." : "Updating..."}</>
            ) : (
              <>{type === "create" ? "Create" : "Update"}</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Question;
