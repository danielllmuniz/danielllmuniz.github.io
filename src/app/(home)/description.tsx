'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

export default function Description() {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(
      () => {
        toast('Link copied to clipboard!')
      },
      (err) => {
        toast('Failed to copy')
        console.error('Failed to copy: ', err)
      },
    )
  }
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-40">
          <Avatar>
            <AvatarFallback className="">DM</AvatarFallback>
          </Avatar>

          <a
            href="Resume.docx"
            onClick={() => toast('Downloading resume...')}
            className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
          >
            Get my CV
          </a>
        </nav>

        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Avatar className="w-32 h-32">
              <AvatarImage asChild src="image/home-img.jpg">
                <Image
                  src="image/home-img.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </AvatarImage>
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Daniel Muniz
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Senior Software Engineer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            Passionate about developing high-performance architectures in
            different scenarios.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
              >
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact</DialogTitle>
                <DialogDescription>
                  Here you can get my contact informations
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Email</Label>
                  <div className="flex gap-1">
                    <Input
                      id="link"
                      defaultValue="munidaniel@gmail.com"
                      readOnly
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="px-3"
                      onClick={() => handleCopy('munidaniel@gmail.com')}
                    >
                      <span className="sr-only">Copy</span>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link">Phone</Label>
                  <div className="flex gap-1">
                    <Input
                      id="link"
                      defaultValue="+55 24 99866 2858"
                      readOnly
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="px-3"
                      onClick={() => handleCopy('+55 24 99866 2858')}
                    >
                      <span className="sr-only">Copy</span>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <div className="flex gap-1">
                    <Label htmlFor="link">Whatsapp</Label>
                    <span className="text-sm text-blue-500">
                      <a
                        target="_blank"
                        href="https://wa.me/5524998662858"
                        rel="noreferrer"
                      >
                        Link
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Input
                      id="link"
                      defaultValue="https://wa.me/5524998662858"
                      readOnly
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="px-3"
                      onClick={() => handleCopy('https://wa.me/5524998662858')}
                    >
                      <span className="sr-only">Copy</span>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
