import Podcast from './Podcast.js';
import fileService from './fileService.js';

class PodcastService {
  async create(podcast, cover) {
    const fileName = fileService.saveFile(cover);
    const createdPodcast = await Podcast.create({ ...podcast, cover: fileName });
    return createdPodcast;
  }

  async getAll() {
    const podcasts = await Podcast.find();
    return podcasts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const podcast = await Podcast.findById(id);
    return podcast;
  }

  async update(podcast) {
    if (!podcast._id) {
      throw new Error('не указан ID');
    }

    const updatedPodcast = await Podcast.findByIdAndUpdate(podcast._id, podcast, { new: true });

    return updatedPodcast;
  }

  async delete(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const podcast = await Podcast.findByIdAndDelete(id);
    return podcast;
  }
}

export default new PodcastService();
