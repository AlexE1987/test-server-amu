import Router from 'express';
import PodcastController from './PodcastController.js';

const router = new Router();

router.post('/podcasts', PodcastController.create);
router.get('/podcasts', PodcastController.getAll);
router.get('/podcasts/:id', PodcastController.getOne);
router.put('/podcasts', PodcastController.update);
router.delete('/podcasts/:id', PodcastController.delete);

export default router;
