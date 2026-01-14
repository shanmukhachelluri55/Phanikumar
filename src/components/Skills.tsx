import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const skills = [
  {
    name: 'AutoCAD',
    logo: 'https://icon-library.com/images/autocad-icon/autocad-icon-6.jpg',
  },
  {
    name: 'Revit',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEUaav7///8LPI9pm+oANYxgd6wKOIYZaPkALophlukMZv5lk/5sneobbP8/fO4WaP8PSK14n/4AYv4AX/4AXP5Qifatxf6KqP7P3f/6+/8AJofa3+vu9P+xyP8NQpMEOo5bk+nd5/8xdf4ocf7x9v/k7PugvvGPrv58ov7U4P+nwP4AUv5Kg/4+fP5rlv6gu/6/0/W8zv9+qOxViv60y/OVtu+YuPCOq/7F1f+Ytf5CcL8cSptZitk3ZLMsWamGre0xU5qUosXCyt5DYaGfrMuAkLlXcKnPmyAUAAAFYUlEQVR4nO3da3PaRhQG4F3ktJaAKqwUjFwcIy7mEgO2IbWdOrV7/f8/qdQ0KewKkHZpdM6Z8874i4cZ88zZRcveLCT1iLLfwP8eFuIPC/GHhfjDQvxhIf6wEH9yC/vDKszMRvP0GMIb/50KgEbF3VtXYfvOr70LBNiE8SJxEi59zwMtFCLo9e2Fg7sVELpQBF1r4bLjeQiEQp3ZCQc138MhFPHARni1LiAKYZBdxL3C1PM9PMKwV1SYfPxaQBRCEbWLCccbBUQiTIsI+8+bBUQibBUQ3vi+R1nYvtMKSE241OtHTLgepBEWLs0GSkr4dZBGVXi1o4BUhOnOAtIQJj/tLiAJoTZIoyfUB2n0hIeA+IX7mygLYYSFLGRh+WEhC1lYflh4bGF4aOV29RNiFobT+7N9GQ6H943ruorU0drGNxYGo6w/Z6TdmldVdBzk/ln9w8IfijWpoJFL+JqHWaiO0WDfvt/ICSShlEmzFzkb628vN3IKS7jKbTdyFlb+C0ChlBPH/ghfKPtVpzIiEErZdCGiEMqWAxGHUI7tiUiE8iGmLpRDhVSYNi82c9tKdxG7ls/+soWTWG0miuL4epK5obBl2U7LFjbNxhcqVc2q5MLuyQ9Q+M/L4oa599XykQFTKISqm3sK7XoiVKEIhdEb7T5OwQpFsDhOM4UrFPGD9tqEmjA0imjVEQELhdJ74oKa0Jglm9k8ESEL1YX24gYLWchCFrKQhSykJ4z0U67kxjRxqr2Y3LjUODEwJSY01osTYt/xzdOf1L7jR0O9kQ6tphPBClVVB8qeDRCqMIxnBvCB0HxpGHX1WShp+UkKUBgGKp42TZ+8sFxCLFs4+RBvRvWms0ma4ZN92/0KZQtlsp0s3Gss12UACHNmZLtAikX4SH0df2i9io9E2CC+n6Z9bd0HcQibxPe1taa09yZOuvER9pdCFi6ceiAG4cC1iUIQ7h+0Wc0fwhJuj7w/6GuibYdHPRDh9rencKoX8cy5iLCEItK/+fadeyIwYWjckWe96xKo0JzJt5skBSw0r1d7dCRCE4pIn6NJHEc14ISirhdx7lZEeEI10Yl1YkJzycnpQAlEoZrrxJ5LVwQoFEoX2k4GwxUaq062JxGgCkWgb7u8RXzuKVNoXv5ruSoDVigivYj2x56ACs0j39fWRYQpFJG+hj9Ge3Zth9Cc7UC79rRrHd/YLZTaFhGqMDDW8e+RrgHv3IthFFGO7GaHwQrNQ0HyoRur4jefgBWKeGwQ5Xg+HBbdvgdXaB4KWqfo/CJcoYgzL5aRIzpCc3qYmtCclCInzP7vG6SEme2UlFAEGURawhXROO9MTCiCQH9mgBcm7c30D09oR9oFC8CFIoi3k2PGPoinj63B6wJ4ks4Lbx/61kKrhCqKgnq3J4Ko+A1uKITr4Li9pYSwkIUsLD8sZCELyw8LWcjC8sNCFrKw/LCQhSwsPyxkIQvLDwtZyMLyw8KDQvE98Ag34afv4KdiL6w9/XxSwZWCwk8nl2W/46IpJHx6j85XTPgZXwErBYS1pwpGXwHhZ2yfMF+ST1h7usRZwEo+oe/9grWAlVzCztWP52W/TYccFPq1gSQt7CxXvyMs9O/akrSwc7P+HVVh5/nLdmSaQt//t4BUhZ3njSuqCAp9f+sUGT1h5+P2HWPUhL6XSklZ2LmSemgJjQKSE2ZdzUxLmBUWgg4LWQg/uYTJKdp5qJxC+UJe+Otp2e/TPvmEfcQdMZ8QcxFzCuUL2jnhvMLkBWsV8wpl8uYcZxlzC6X87ffz0xOEOc8tXI1t/vjzDb78VUCIOyzEHxbiDwvxh4X4w0L8YSH+0Bf+DebRdwCpqsCsAAAAAElFTkSuQmCC',
  },
  {
    name: 'Adobe Photoshop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
  },
  {
    name: 'SketchUp',
    logo: 'https://1000logos.net/wp-content/uploads/2020/09/SketchUp-Logo.jpg',
  },
  {
    name: 'Enscape',
    logo: 'data:image/png;base64,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',
  },
  {
    name: 'Lumion',
    logo: 'data:image/jpeg;base64,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',
  },
];

export default function Skills({ darkMode }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 md:py-32 ${darkMode ? 'bg-zinc-900' : 'bg-stone-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Software Skills
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-amber-600' : 'bg-amber-700'
            }`}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`group p-6 rounded-lg text-center cursor-pointer ${
                darkMode ? 'bg-zinc-800' : 'bg-white'
              } shadow-md hover:shadow-xl transition-all`}
            >
              {/* Logo */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-white/5' : 'bg-zinc-100'
                } group-hover:bg-amber-700 transition-colors`}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-9 h-9 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                />
              </div>

              {/* Name */}
              <h3
                className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
