// Intersection Observer API
import { useInView } from 'react-intersection-observer';

export default function Certification({title, issuer, date, img}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div className={`certification-card ${inView ? "certification-1" : "certification-0"}`} ref={ref}>
            <img src={img} alt={title} />
            <p className="bold">{title}</p>
            <p>{issuer}</p>
            <p className="remark">{date}</p>
        </div>
    );
}