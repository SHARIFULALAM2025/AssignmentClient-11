import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { useQuery } from '@tanstack/react-query'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'

const Choose = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: AllQuestion = [] } = useQuery({
    queryKey: ['customerQuestion'],
    queryFn: async () => {
        const res = await AxiosSecure('/customer-question')
        return res.data
    },
  })
  return (
    <div>
      <div className="md:mt-24">
        <div className="text-center space-y-3 md:mb-12">
          <h1 className="text-4xl font-bold">
            why Choose Our Book Courier services ?
          </h1>
          <p className="text-xs font-medium">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        {AllQuestion.map((item) => (
          <Accordion key={item._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className="">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="">{item.Ans}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default Choose
