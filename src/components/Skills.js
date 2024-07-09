import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { InfiniteMovingCards } from './cards/SkillCards'

const Skills = React.memo(() => {
    return (
        <section className="section" id="skills">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
                    >
                        <h2 className="h2 text-accent mb-6">Skills</h2>

                        <InfiniteMovingCards />
                    </motion.div>
                </div>
            </div>
        </section>
    )
})

export default Skills
