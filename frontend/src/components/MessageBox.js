export default function MessageBox(props) {
  return (
    <div className="alert alert-danger d-flex align-items-center" role={props.variant || 'info'}>
      {/* <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg> */}
      <div>
        {props.children}
      </div>
    </div>
  )
}
