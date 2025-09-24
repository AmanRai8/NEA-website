import React, { useState } from "react";

const Content3 = () => {
  const [showAllCareerNotices, setShowAllCareerNotices] = useState(false);

  const officials = [
    {
      id: 13,
      name: "Mr. Sarbjit Kumar Chaudhary",
      position: "Information Officer",
      image: "Sarbjit.jpg",
    },
    {
      id: 15,
      name: "Punam Joshi",
      position: "Nodal Officer",
      image: "Punam.jpg",
    },
  ];

  const publications = [
    {
      title: "अमरज्योति बार्षिकोत्सब कविता विशेषाङ्क भाद्र - २०८२",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/45921763.pdf",
    },
    {
      title:
        "Electricity Regulatory Commission (Open Access) Directives, 2082 (2025 AD)",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/Open_Access_Directives_2082_compressed.pdf",
    },
    {
      title:
        "Notice for Short Listed Consulting Firms Of Request for EOI for Consulting Service for Environmental and Social Monitoring Works (EOI No.: NEA-SSEMD-2081/82-CS-01)",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/54983627.pdf",
    },
    {
      title: "अमरज्योति-६६ औ‌‌‍‍‌ अङ्क, जेष्ठ-२०८२",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/92346326.pdf",
    },
    {
      title:
        "लैङ्गिक समानता र सामाजिक समावेशीकरण रणनीति तथा सञ्चालन निर्देशिका, २०७६",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/67270338.pdf",
    },
    {
      title:
        "Implementation Manual for Gender Equality and Social Inclusion Strategy and Operational Guidelines-2020",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/68683432.pdf",
    },
    {
      title: "Initial Environmental Examination (Nijgadh-Pokhariya 400 Kv TLP)",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/Nigada_Pokhariya_400Kv.pdf",
    },
    {
      title: "Draft ENVIRONMENTAL AND SOCIAL MANAGEMENT SYSTEM",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/39634419.pdf",
    },
    {
      title: "अमरज्योति-६५औ‌‌‍‍‌ अङ्क, फागुन–२०८१",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/38177553.pdf",
    },
    {
      title:
        "EXPRESSION OF INTEREST (EOI) For Consulting Service for Environmental and Social Monitoring Works",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/60714660.pdf",
    },
  ];

  const careerNotices = [
    {
      title:
        "तह ३, प्राविधिक सेवा तर्फका इलेक्ट्रिसियन र जुनियर मिस्त्री पदको लिखित परीक्षाको नतिजा प्रकाशन र अन्तर्वार्ता परीक्षा कार्यक्रम सम्बन्धी सूचना",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/57120938.pdf",
      visible: true,
    },
    {
      title:
        "मिति २०८०।०७।२४ मा प्रकाशित विज्ञापन अनुसार तह ४, फोरमेन पदको (इलेक्ट्रिकल,मेकानिकल, सिभिल तर्फका) खुला प्रतियोगितातर्फको लिखित तथा अन्तर्वार्ता परीक्षाको अन्तिम नतिजा प्रकाशन (२०८२.०५.१०)",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/65679403.pdf",
      visible: true,
    },
    {
      title:
        "मिति २०८०।०७।२४ मा प्रकाशित विज्ञापन अनुसार तह ४, फोरमेन पदको (इलेक्ट्रिकल र मेकानिकल तर्फका) खुला प्रतियोगितातर्फको लिखित तथा अन्तर्वार्ता परीक्षाको अन्तिम नतिजा प्रकाशन (२०८२.०५.०९)",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/51928477.pdf",
      visible: true,
    },
    {
      title:
        "बिभिन्‍न पदको बढुवा सिफारिसमा चित्त नबुझी पुनरावलोकन निवेदन दिएका निवेदन उपर बिभिन्‍न मितिमा पुनरावलोकन समितिबाट भएको निर्णयको सूचना",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/17989466.pdf",
      visible: false,
    },
    {
      title:
        "प्रशासन सेवा, तह १२, उपकार्यकारी निर्देशक पदको बढुवा सिफारिसमा चित्त नबुझी पुनरावलोकनका लागि प्राप्‍त निवेदन उपर मिति २०८२।०४।२९ मा पुनरावलोकन समितिबाट भएको निर्णयको सूचना",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/24651262.pdf",
      visible: false,
    },
    {
      title:
        "प्राविधिक सेवा, तह ३ का विभिन्न पदमा मिति २०८२।०४।११ गतेदेखि परीक्षा सञ्‍चालन हुने गरी पूर्व सूचना प्रकाशित भएकोमा बिशेष कारणबस अर्को सूचना प्रकाशन नभएसम्मका लागि उक्त अन्तर्वार्ता परीक्षा स्थगित गरिएको ब्यहोरा मिति २०८२।०४।११ को निर्णयानुसार सम्बन्धित सबैको जानकारीको लागि यो सूचना प्रकाशन गरिएको छ।",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/74938486.pdf",
      visible: false,
    },
    {
      title:
        "मिति २०८१।०९।०५, २०८२।०१।१९ र २०८२।०१।१६ गते प्रकाशित खुला तथा आन्तरिक (तह १०, सहनिर्देशक र तह ८, सहायक प्रबन्धक पदका)प्रतियोगितको लागि देहाय बमोजिमका पदहरुको आन्तरिक प्रतियोगिता, खुला तथा समावेशी तर्फको लिखित परीक्षाको परीक्षा कार्यक्रम संलग्न बमोजिम निर्धारण गरिएको हुँदा सम्बन्धित सबैको जानकारीका लागि यो सूचना प्रकाशन गरिएको छ।",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/74808560.pdf",
      visible: false,
    },
    {
      title:
        "प्राविधिक सेवा, इलेक्ट्रिकल समूह/उपसमूह, तह ८, सहायक प्रबन्धक पदकमा आवेदन दिने आवेदकहरुको स्वीकृत नामावली",
      link: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/25763713.pdf",
      visible: false,
    },
  ];

  const visibleCareerNotices = showAllCareerNotices
    ? careerNotices
    : careerNotices.filter((notice) => notice.visible);

  return (
    <section className="pt-0 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mt-6 -mx-4">
          {/* Left sidebar with additional officials */}
          <div className="w-full lg:w-1/4 xl:w-1/4 px-4 mb-4 xl:mb-0">
            {officials.map((official) => (
              <div key={official.id} className="text-center py-0 px-0 pb-6">
                <button
                  className="focus:outline-none"
                  title="Click to view Detail"
                >
                  <img
                    src={official.image}
                    alt={official.name}
                    className="w-32 h-32 mx-auto border border-blue-600 rounded-full mb-2"
                  />
                </button>
                <p className="text-gray-800 font-medium">{official.name}</p>
                <p className="text-gray-600 text-sm">{official.position}</p>
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="w-full lg:w-3/4 px-4">
            <div className="flex flex-wrap h-full -mx-2">
              {/* Publications section */}
              <div className="w-full md:w-1/2 xl:w-2/3 px-2 mb-4 xl:mb-0">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-11/12 xl:w-5/6">
                    <h6 className="text-sm font-semibold uppercase text-gray-700 mb-3">
                      Publications
                    </h6>
                    <div className="border-gray-800 text-left relative mb-4">
                      <hr className="absolute block bg-blue-600 m-0 w-16 h-1" />
                    </div>

                    <div className="space-y-3">
                      {publications.map((publication, index) => (
                        <div key={index}>
                          <nav aria-label="breadcrumb">
                            <ol className="list-none p-0 m-0">
                              <li className="bg-gray-50 p-3 rounded">
                                <a
                                  title={publication.title}
                                  className="text-blue-600 hover:text-blue-800 text-sm leading-relaxed transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={publication.link}
                                >
                                  {publication.title}
                                </a>
                              </li>
                            </ol>
                          </nav>
                          {index < publications.length - 1 && (
                            <hr className="my-2 border-gray-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Notice section */}
              <div className="w-full md:w-1/2 xl:w-1/3 px-2">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-11/12 xl:w-5/6 pb-6">
                    <h6 className="text-sm font-semibold uppercase text-gray-700 mb-3">
                      Career Notice
                    </h6>
                    <div className="border-gray-800 text-left relative mb-4">
                      <hr className="absolute block bg-blue-600 m-0 w-16 h-1" />
                    </div>

                    <nav aria-label="breadcrumb">
                      <ol className="list-none p-0 m-0 overflow-y-hidden max-h-96">
                        {visibleCareerNotices.map((notice, index) => (
                          <li key={index} className="mb-3">
                            <hr className="mb-3 border-gray-300" />
                            <table className="w-full">
                              <tbody>
                                <tr>
                                  <td className="p-1">
                                    <a
                                      title={notice.title}
                                      className="text-blue-600 hover:text-blue-800 text-sm leading-relaxed transition-colors"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={notice.link}
                                    >
                                      {notice.title}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </li>
                        ))}
                      </ol>
                    </nav>

                    {!showAllCareerNotices && (
                      <button
                        onClick={() => setShowAllCareerNotices(true)}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                      >
                        Show More Career Notices
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content3;
