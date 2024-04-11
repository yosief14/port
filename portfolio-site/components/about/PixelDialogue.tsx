"use client"
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, usePresence, useAnimate } from 'framer-motion';



const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

const CursorBlinker = () => {
    return (
        <motion.span
            variants={cursorVariants}
            animate="blinking"
        >
            _
        </motion.span>
    );
}
interface dialogueProps {
    text: string;
    delay: number;
}

export default function PixelDialogue(props: dialogueProps) {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => props.text.slice(0, latest));
    let textDuration = 0.02 * props.text.length;
    let delay = props.delay;

    useEffect(() => {
        if (isPresent) {
            runAnimation();

        }
        else {

            safeToRemove();
        }
    }, [isPresent])

    const runAnimation = async () => {

        let j = 1
        for (let i = 0; i < props.text.length; i++) {
            if (props.text[i] === '\u2028' || i === props.text.length - 1) {
                textDuration = 0.04 * j;
                await animate(count, i, { duration: textDuration, ease: "linear", delay: props.delay })
                j = 1;
                continue;
            }
            if (props.text[i] === '\r') {
                textDuration = 0.04 * j;
                await animate(count, i, { duration: textDuration, ease: "linear", delay: 0.7 })
                j = 1;
                continue;
            }
            j++;
        }
    }

    return (
        <>
            <motion.span
                style={{ whiteSpace: "pre-line" }}
                key={props.text}
            >
                {displayText}
            </motion.span>
            {/* <CursorBlinker></CursorBlinker> */}
        </>
    )
}
