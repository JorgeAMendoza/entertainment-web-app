import Show from '../schemas/show';
import { DbShow } from '../db';

interface NewShow {
  title: DbShow['title'];
  thumbnail: DbShow['thumbnail'];
  year: DbShow['year'];
  rating: DbShow['rating'];
}

const getAllShows = async (): Promise<DbShow[]> => {
  return await Show.find({});
};

const getShowById = async (id: string): Promise<DbShow> => {
  const targetShow = await Show.findById(id);
  if (targetShow !== null) return targetShow;
  else throw new Error('Show not found');
};

const insertShow = async (show: NewShow): Promise<DbShow> => {
  const newShow = new Show({
    title: show.title,
    thumbnail: show.thumbnail,
    year: show.year,
    rating: show.rating,
  });

  const saveResult = await newShow.save();
  return saveResult;
};

const deleteShowById = async (id: string): Promise<void> => {
  const targetShow = await Show.findById(id);
  if (targetShow !== null) await targetShow.delete();
  else throw new Error('Show not found');
};

export default {
  getAllShows,
  getShowById,
  insertShow,
  deleteShowById,
};
