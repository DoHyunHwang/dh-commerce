import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: 'secret_Ke4U1jCfykEWTwVhocsyCGVWVLWSfgc7oafwAwg4CU5',
});

const databaseId = '21f8d958623640e896a2260c3d60e944';

async function gettems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'price',
          direction: 'ascending',
        },
      ],
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

type Data = {
  items?: any;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await gettems();
    res.status(200).json({ items: response?.results, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
