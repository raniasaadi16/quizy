import Link from 'next/link'
import { useState } from 'react'
import Select from 'react-select'

export default function Home() {
  const categoriesOpt = [
    { value: '9', label: 'General Knowledge' },
    { value: '21', label: 'Sport' },
    { value: '10', label: 'Books' },
    { value: '15', label: 'Video Games' },
    { value: '19', label: 'Mathematics' },
    { value: '18', label: 'computers' },
    { value: '31', label: 'Anime & Manga' },
    { value: '23', label: 'History' },
    { value: '22', label: 'Geography' }
  ]
  const difficultyOpt = [
    { value: 'easy', label: 'easy' },
    { value: 'medium', label: 'medium' },
    { value: 'difficult', label: 'difficult' },
    { value: "any", label: "i don't care" },
  ]
  const [category, setcategory] = useState(categoriesOpt[0]);
  const [difficulty, setdifficulty] = useState(difficultyOpt[0]);
  const [amount, setamount] = useState(2);

  const catsChange = (selectedOptions) => {
    setcategory(selectedOptions)
  }
  const diffChange = (selectedOptions) => {
    setdifficulty(selectedOptions)
  }
  return (
    <div>
      <h1 className='title'>Game Params</h1>
      <div className="mt-5">
        <h3 className='text-md mb-1'>Select Category</h3>
        <Select options={categoriesOpt} value={category} onChange={catsChange} />
      </div>
      <div className="mt-5">
        <h3 className='text-md mb-1'>Select Difficulty</h3>
        <Select options={difficultyOpt} value={difficulty} onChange={diffChange} />
      </div>
      <div className="mt-5">
        <h3 className='text-md mb-1'>Number of Questions</h3>
        <input type="number" className='p-2 border border-gray-300 rounded-md w-full block' max={10} min={2} value={amount} onChange={e => setamount(e.target.value)} />
      </div>
      <div className="mt-5">
        <Link href={`/game/${category.value}/${difficulty.value}/${amount}`}>
          <a className='p-2 rounded-lg w-full bg-yellow-500 block text-center text-white'>Start</a>
        </Link>
      </div>
    </div>
  )
}
