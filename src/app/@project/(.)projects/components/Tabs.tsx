import React, { useState } from 'react'

type Section = {
  compiledSource: string
}

type Sections = {
  [key: string]: Section
}

interface TabsProps {
  sections: Sections
}

const Tabs: React.FC<TabsProps> = ({ sections }) => {
  const sectionKeys = Object.keys(sections)
  const [activeTab, setActiveTab] = useState('')
  const [expanded, setExpanded] = useState(false)

  const handleTab = (key: string) => {
    if (activeTab === key) {
      setActiveTab('')
      setExpanded(false)
    } else {
      setActiveTab(key)
      setExpanded(true)
    }
  }

  return (
    <>
      <div className="flex flex-col w-full space-y-4">
        <div className={`transition-all ease-in-out duration-500 ${expanded ? 'block' : 'hidden'} bg-gray-100 p-4 rounded-lg shadow-inner mb-24 md:m-auto`}>
          {activeTab && sections[activeTab] && (
            <div
              dangerouslySetInnerHTML={{
                __html: (
                  `<p className="text-base">In the American and Sicilian Mafia, a made man is a fully initiated member of the Mafia. To become "made", an associate first must be Italian or of Italian descent and sponsored by another made man. An inductee will be required to take the oath of omertà, the Mafia code of silence and code of honor. After the induction ceremony, the associate becomes a "made man" and holds the rank of soldier (Italian: soldato) in the Mafia hierarchy. Made men are the only ones who can rise through the ranks of the Mafia, from soldier to caporegime, consigliere, underboss, and boss.
              Other common names for members include man of honor (Italian: uomo d'onore), man of respect (Italian: uomo di rispetto), one of us (Italian: uno di noi), friend of ours (Italian: amico nostro), good fella, and wiseguy, although the last two terms can also apply to non-initiated Mafia associates who work closely with the Mafia, rather than just official "made men". Earning or making one's "bones" or "button" or becoming a "button man" for the Mafia is usually synonymous with becoming a "made man".
              Other street terms for being initiated into the Mafia include being "straightened out" or "baptized", and earning one's "badge".[1] "Opening the books" and "closing the books" are phrases used in the Mafia to indicate, respectively, that a family is ready or unwilling/unable to accept new members. In Sicily, the proper term for a member of the Sicilian Mafia is in Italian uomo d'onore, or in Sicilian omu d'onuri. Mafioso and the plural mafiosi are common terms used colloquially and by the press and academics, but are generally not used by members of the Italian-American and Sicilian Mafia themselves.</p>
            <p>In the American and Sicilian Mafia, a made man is a fully initiated member of the Mafia. To become "made", an associate first must be Italian or of Italian descent and sponsored by another made man. An inductee will be required to take the oath of omertà, the Mafia code of silence and code of honor. After the induction ceremony, the associate becomes a "made man" and holds the rank of soldier (Italian: soldato) in the Mafia hierarchy. Made men are the only ones who can rise through the ranks of the Mafia, from soldier to caporegime, consigliere, underboss, and boss.
              Other common names for members include man of honor (Italian: uomo d'onore), man of respect (Italian: uomo di rispetto), one of us (Italian: uno di noi), friend of ours (Italian: amico nostro), good fella, and wiseguy, although the last two terms can also apply to non-initiated Mafia associates who work closely with the Mafia, rather than just official "made men". Earning or making one's "bones" or "button" or becoming a "button man" for the Mafia is usually synonymous with becoming a "made man".
              Other street terms for being initiated into the Mafia include being "straightened out" or "baptized", and earning one's "badge".[1] "Opening the books" and "closing the books" are phrases used in the Mafia to indicate, respectively, that a family is ready or unwilling/unable to accept new members. In Sicily, the proper term for a member of the Sicilian Mafia is in Italian uomo d'onore, or in Sicilian omu d'onuri. Mafioso and the plural mafiosi are common terms used colloquially and by the press and academics, but are generally not used by members of the Italian-American and Sicilian Mafia themselves.</p>
            <p>In the American and Sicilian Mafia, a made man is a fully initiated member of the Mafia. To become "made", an associate first must be Italian or of Italian descent and sponsored by another made man. An inductee will be required to take the oath of omertà, the Mafia code of silence and code of honor. After the induction ceremony, the associate becomes a "made man" and holds the rank of soldier (Italian: soldato) in the Mafia hierarchy. Made men are the only ones who can rise through the ranks of the Mafia, from soldier to caporegime, consigliere, underboss, and boss.
              Other common names for members include man of honor (Italian: uomo d'onore), man of respect (Italian: uomo di rispetto), one of us (Italian: uno di noi), friend of ours (Italian: amico nostro), good fella, and wiseguy, although the last two terms can also apply to non-initiated Mafia associates who work closely with the Mafia, rather than just official "made men". Earning or making one's "bones" or "button" or becoming a "button man" for the Mafia is usually synonymous with becoming a "made man".
              Other street terms for being initiated into the Mafia include being "straightened out" or "baptized", and earning one's "badge".[1] "Opening the books" and "closing the books" are phrases used in the Mafia to indicate, respectively, that a family is ready or unwilling/unable to accept new members. In Sicily, the proper term for a member of the Sicilian Mafia is in Italian uomo d'onore, or in Sicilian omu d'onuri. Mafioso and the plural mafiosi are common terms used colloquially and by the press and academics, but are generally not used by members of the Italian-American and Sicilian Mafia themselves.</p>
            <p>In the American and Sicilian Mafia, a made man is a fully initiated member of the Mafia. To become "made", an associate first must be Italian or of Italian descent and sponsored by another made man. An inductee will be required to take the oath of omertà, the Mafia code of silence and code of honor. After the induction ceremony, the associate becomes a "made man" and holds the rank of soldier (Italian: soldato) in the Mafia hierarchy. Made men are the only ones who can rise through the ranks of the Mafia, from soldier to caporegime, consigliere, underboss, and boss.
              Other common names for members include man of honor (Italian: uomo d'onore), man of respect (Italian: uomo di rispetto), one of us (Italian: uno di noi), friend of ours (Italian: amico nostro), good fella, and wiseguy, although the last two terms can also apply to non-initiated Mafia associates who work closely with the Mafia, rather than just official "made men". Earning or making one's "bones" or "button" or becoming a "button man" for the Mafia is usually synonymous with becoming a "made man".
              Other street terms for being initiated into the Mafia include being "straightened out" or "baptized", and earning one's "badge".[1] "Opening the books" and "closing the books" are phrases used in the Mafia to indicate, respectively, that a family is ready or unwilling/unable to accept new members. In Sicily, the proper term for a member of the Sicilian Mafia is in Italian uomo d'onore, or in Sicilian omu d'onuri. Mafioso and the plural mafiosi are common terms used colloquially and by the press and academics, but are generally not used by members of the Italian-American and Sicilian Mafia themselves.</p>`
                )
              }}
              className="prose prose-2xl mx-auto py-12"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md w-full absolute bottom-0 left-0">
        {sectionKeys.map((key) => (
          <button
            key={key}
            onClick={() => handleTab(key)}
            className={`px-2 md:px-4 py-2 text-xs md:text-sm font-medium md:font-semibold text-white rounded-md transition-colors ${activeTab === key ? 'bg-blue-600' : 'bg-gray-700 hover:bg-blue-500'}`}
          >
            {key.replace('-', ' ')}
          </button>
        ))}
      </div>
    </>
  )
}

export default Tabs