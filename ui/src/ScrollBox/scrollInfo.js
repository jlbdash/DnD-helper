
export function scrollInfo() {
  let sectionPart = '';
  monsterList.forEach(
    (monster) =>
      (sectionPart += `
    <h3>${monster.name}</h3>
    <p><strong>Index:</strong> ${monster.index}</p>
    <!-- You can display more monster details here -->
  `)
  );

  console.log(sectionPart);
  const bigSection = (
    <section>
       {sectionPart}
    </section>
  );
  return bigSection
}
