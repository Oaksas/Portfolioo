import React, { useEffect, useState } from 'react'
import { cn } from '../../util/cn'
import ReactSvg from '../../assets/skills/react.svg'
import NextJsSvg from '../../assets/skills/nextjs.svg'
import GatsbySvg from '../../assets/skills/gatsby.svg'
import AngularSvg from '../../assets/skills/angular.svg'
import NodeSvg from '../../assets/skills/node.svg'
import DjangoSvg from '../../assets/skills/django.svg'
import ReduxSvg from '../../assets/skills/redux.svg'
import FramerSvg from '../../assets/skills/framer.svg'
import MySQLSvg from '../../assets/skills/mysql.svg'
import PostGresqlSvg from '../../assets/skills/postgresql.svg'
import JestSvg from '../../assets/skills/jest.svg'
import ViteSvg from '../../assets/skills/vite.svg'
import TailwindSvg from '../../assets/skills/tailwind.svg'
import Airtable from '../../assets/skills/airtable.svg'
import AWSAPIGATEWAY from '../../assets/skills/aws-api-gateway.svg'
import AWSS3 from '../../assets/skills/aws-s3.svg'
import LAMBDA from '../../assets/skills/aws-lambda.svg'
import Dynamodb from '../../assets/skills/aws-dynamodb.svg'
import CLOUDWATCH from '../../assets/skills/aws-cloudwatch.svg'
import Typescript from '../../assets/skills/typescript.svg'
import Javascript from '../../assets/skills/javascript.svg'
import Python from '../../assets/skills/python.svg'
import Sass from '../../assets/skills/sass.svg'

export const InfiniteMovingCards = ({
    skills = [
        ReactSvg,
        NextJsSvg,
        GatsbySvg,
        AngularSvg,
        NodeSvg,
        DjangoSvg,
        ReduxSvg,
        FramerSvg,
        MySQLSvg,
        PostGresqlSvg,
        JestSvg,
        ViteSvg,
        TailwindSvg,
        Airtable,
        AWSAPIGATEWAY,
        AWSS3,
        LAMBDA,
        Dynamodb,
        CLOUDWATCH,
        Typescript,
        Javascript,
        Python,
        Sass,
    ],
    direction = 'left',
    speed = 'slow',
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null)
    const scrollerRef = React.useRef(null)

    useEffect(() => {
        addAnimation()
    }, [])
    const [start, setStart] = useState(false)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s'
                )
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s'
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s'
                )
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {skills.map((skill, idx) => (
                    <li
                        className="max-w-full relative  flex-shrink-0 px-8 py-6 "
                        key={idx}
                    >
                        <img src={skill} alt="Logo" width={100} height={100} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
