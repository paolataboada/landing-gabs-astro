import { motion } from "framer-motion";

type MotionWrapperProps = {
    children: React.ReactNode;
    className?: string;
    animation?: "fade" | "slideLeft" | "slideRight" | "slideUp" | "slideDown" | "scale";
    duration?: number;
    stiffness?: number;
    damping?: number;
    scale?: number;
    delay?: number;
    viewportAmount?: number;
    once?: boolean;
    ease?: "easeOut" | "easeIn" | "easeInOut" | "linear" | "backOut";
    type?: "spring" | "tween";
};

const MotionWrapper = ({
    children,
    className = "",
    animation = "fade",
    duration = 0.6,
    stiffness = 250,
    damping = 20,
    scale = 1.2,
    delay = 0,
    viewportAmount = 0.1,
    once = true,
    ease = "easeOut",
    type = "spring",
}: MotionWrapperProps) => {
    const animations = {
        fade: { opacity: 0, filter: 'blur(10px)', y: 0, x: 0 },
        slideLeft: { x: -250, opacity: 0, filter: 'blur(10px)' },
        slideRight: { x: 250, opacity: 0, filter: 'blur(10px)' },
        slideUp: { y: 100, opacity: 0, filter: 'blur(10px)' },
        slideDown: { y: -100, opacity: 0, filter: 'blur(10px)' },
        scale: { scale, opacity: 0, filter: 'blur(10px)', y: 0, x: 0 },
    };

    return (
        <motion.div
            className={className}
            initial={animations[animation]}
            whileInView={{ x: 0, y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={
                type === "spring"
                    ? { type: "spring", stiffness, damping, delay }
                    : { type: "tween", duration, ease, delay }
            }
            viewport={{ once, amount: viewportAmount }}>
            {children}
        </motion.div>
    );
};

export default MotionWrapper;