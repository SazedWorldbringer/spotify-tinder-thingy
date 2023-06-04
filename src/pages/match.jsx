import { BellRing, Check } from "lucide-react"

import { cn } from "../lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Switch } from "../components/ui/switch"

import { useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import useMeasure from "react-use-measure"

import Match from "../components/match/match"
import api from "../api/api"

export default function Matches({ className, ...props }) {
  const [count, setCount] = useState(0)
  const [ref, { width }] = useMeasure()
  const prev = usePrevious(count)
  const [smallWindow, setSmallWindow] = useState(window.innerWidth < 1024);

  const handleClick = () => {
    const session = api.getSession()
    const oAuthExpiryDate = session.providerAccessTokenExpiry
    console.log(oAuthExpiryDate)
  }

  const updateMedia = () => {
    setSmallWindow(window.innerWidth < 1024);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
  }, []);

  let direction = count > prev ? 1 : -1

  return (
    <div className="container">
      <div
        ref={ref}
        className="relative sm:px-6 md:px-8 mt-8 flex justify-around items-center"
      >
        <AnimatePresence>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            key={count}
            className="w-full"
          >
            <Match colors={colors} count={count} />
          </motion.div>
        </AnimatePresence>
        <div>
          {
            !smallWindow ? (
              <div>
                <Button
                  variant="outline"
                  onClick={() => setCount(count - 1)}
                  className=" z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCount(count + 1)}
                  className=" z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            ) : null
          }
        </div>
      </div>
      <Button onClick={handleClick}>Get spotify data</Button>
    </div>
  )
}

let variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
}

const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"]

const usePrevious = (state) => {
  const [tuple, setTuple] = useState([null, state]) // [prev, current]

  if (tuple[1] !== state) {
    setTuple([tuple[1], state])
  }

  return tuple[0]
}

{/* <div className="mt-8 flex justify-center">
        <div
          ref={ref}
          className="h-96 w-96 bg-gray-700 flex justify-center items-center overflow-hidden relative"
        >
          <AnimatePresence custom={{ direction, width }}>
            <motion.div
              key={count}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              custom={{ direction, width }}
              className={cn(
                colors[Math.abs(count) % 4],
                "w-72 h-72 text-white flex justify-center items-center absolute"
              )}>
              {count}
            </motion.div>
          </AnimatePresence>
        </div>
      </div> */}

{/*<Card  className={cn(
    "w-1/2 mx-auto",
    className,
    colors[Math.abs(count) % 4]
  )} {...props}>
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className=" flex items-center space-x-4 rounded-md border p-4">
        <BellRing />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            Push Notifications
          </p>
          <p className="text-sm text-muted-foreground">
            Send notifications to device.
          </p>
        </div>
        <Switch />
      </div>
      <div>
        {notifications[count % 2].map((notification, index) => (
          <div
            key={index}
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className={cn("flex h-2 w-2 translate-y-1 rounded-full", colors[Math.abs(count + 1) % 4])} />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {notification.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
            </div>
            {index < 2 && (
              <Separator className="w-[57vw] mt-2 mb-[-0.5rem]" />
            )}
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">
        <Check className="mr-2 h-4 w-4" /> Mark all as read
      </Button>
    </CardFooter>
  </Card> */}
