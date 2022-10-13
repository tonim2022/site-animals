import { Router } from "express"

const router = Router()
router.get('/', (req, res) => res.render('index', { title: "My site animals"}))
router.get('/costa', (req, res) => res.render('costa', { title: "Costa"}))
router.get('/sierra', (req, res) => res.render('sierra', { title: "Sierra"}))
router.get('/selva', (req, res) => res.render('selva', { title: "Selva"}))
router.get('/about', (req, res) => res.render('about', { title: "About"}))
router.get('/contact', (req, res) => res.render('contact',{ title: "Contacts"}))

export default router