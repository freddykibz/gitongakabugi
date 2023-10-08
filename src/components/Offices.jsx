import clsx from "clsx"

function Office({ name, children, invert = false }) {
    return (
        <address className={clsx(
            "text-sm not-italic",
            invert ? "text-neutral-300" : "text-neutral-600"
        )}
        >
            <strong className={invert ? "text-white": "text-neutral-950"}>
                {name}
            </strong>
            <br/>
            {children}
        </address>
    )
}

const Offices = ({ invert = false, ...props }) => {
  return (
   <ul role="list" {...props}>
    <li>
      <Office name="KENYA" invert={invert} />
      at GTC
      <br/>
      Upperhill Nairobi Kenya
    </li>
    <li><Office name="KENYA" invert={invert} />
      Crown Plaza
      <br/>
      Westlands Nairobi Kenya
    </li>
   </ul>
  )
}

export default Offices